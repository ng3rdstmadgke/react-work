// src/lib.ts
function hello() {
  console.log("Hello from lib.ts");
}

// src/main.ts
var main = () => {
  hello();
};
main();
