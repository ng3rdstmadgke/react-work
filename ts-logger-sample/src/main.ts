import {logger} from '@/logger'

logger.info(
  {userId: "keita.midorikawa", req: {headers: {authorization: "hoge"}}, password: "hogehoge"},
  'ユーザーデータを取得しました。 %s %d %O',
  "hello",
  100,
  {a: "hoge"}
);
