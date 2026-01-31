import pino from 'pino';

const isDev = process.env.NODE_ENV === 'development';

export const logger = pino({
  // ログレベル
  // level: https://getpino.io/#/docs/api?id=level-string
  level: process.env.LOG_LEVEL || 'info',

  // 時刻をISO形式にする
  // timestamp: https://getpino.io/#/docs/api?id=timestamp-boolean-function
  timestamp: pino.stdTimeFunctions.isoTime,

  // センシティブな情報のマスキング
  // redact: https://getpino.io/#/docs/api?id=redact-array-object
  redact: {
    paths: ['req.headers.authorization', 'password', 'email', '*.password'],
    censor: '********',
  },

  // コンテナ環境でpid, hostnameは不要なので出力しない
  // base: https://getpino.io/#/docs/api?id=base-object
  base: {
    pid: undefined, // プロセスIDを出力しない
    hostname: undefined, // ホスト名を出力しない
  },

  // browser: https://getpino.io/#/docs/api?id=browser-object
  //   - BrowserAPI: https://getpino.io/#/docs/browser
  browser: {
        asObject: true // ブラウザのコンソールでもオブジェクトとして表示
  },

  // 開発時は見やすく、本番環境ではjson形式
  // transport: https://getpino.io/#/docs/api?id=transport-object
  //   - pino.transport(options): https://getpino.io/#/docs/api?id=pino-transport
  ...(isDev && {
    transport: {
      // Pretty Printing: https://getpino.io/#/docs/pretty
      // pino-pretty: https://github.com/pinojs/pino-pretty
      target: 'pino-pretty',
      // pino-pretty options: https://github.com/pinojs/pino-pretty?tab=readme-ov-file#options
      options: {
        colorize: true,  // 色
        translateTime: 'SYS:standard',  // エポックタイム値を人間が読みやすい日付と時刻の文字列に変換
        ignore: 'pid,hostname', // pretty上でもpid, hostname項目を無視
      },
    },
  }),
});