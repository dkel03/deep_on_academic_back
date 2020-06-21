"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Test",
    embedded: false
  },
  {
    name: "AnswerSheet",
    embedded: false
  },
  {
    name: "Answer",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/jay_kim-1cdc80/deep-on-academic-back/dev`
});
exports.prisma = new exports.Prisma();
