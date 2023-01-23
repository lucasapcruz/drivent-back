module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: [
    '/node_modules/(?!prisma)'
  ],
  testMatch: ["<rootDir>/tests/**/*.(test|spec).ts"],
  setupFiles: ["<rootDir>/tests/setup-envs.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/tests/$1",
    "axios": "axios/dist/node/axios.cjs"
  },
  restoreMocks: true,
};
