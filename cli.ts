import { parse as argparse } from "https://deno.land/std@0.181.0/flags/mod.ts";
import {
  DOMParser,
  Element,
} from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

const args = argparse(Deno.args, {
  boolean: [
    // instructions for this script
    "help",

    // debug mode
    "debug",
  ],
  string: [
    // output options
    "output",
    "o",
  ],
});

const commandName = `freshportsq`;

const usageMessage = `
Usage: ${commandName} [OPTIONS] <packagename>
a freshports.org (freebsd ports) query tool

Options:
  --help              Show this help message
  --debug             Debug mode

  Examples:
  ${commandName} deno
`;

// parse args
const help = args.help;
const debugMode = args.debug;

const baseUrl = "https://www.freshports.org/search.php";
let qParams =
  "&search=go&num=10&stype=name&method=match&deleted=excludedeleted&start=1&casesensitivity=caseinsensitive";

// setup query
let searchTerm = Deno.args[0];
let searchQuery = `${baseUrl}?query=${searchTerm}${qParams}`;

if (debugMode) {
  console.debug("will query: " + searchQuery);
}

if (help) {
  console.log(usageMessage);
  Deno.exit();
}

let res = await fetch(searchQuery);
let resText = await res.text();

// parse
const doc = new DOMParser().parseFromString(resText, "text/html")!;
let qEntries = await doc.querySelectorAll("dt");

// process
console.log("   Packages Found   ");
console.log("--------------------");
for (const qq of qEntries) {
  if (qq.textContent.includes("PKGNAME:")) {
    let pkgname = qq.textContent.replace(/PKGNAME: /, "");
    console.log(pkgname);
  }
}
