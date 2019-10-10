const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const chokidar = require("chokidar");
const fs = require("fs");

// Electron initialization

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// File watcher initialization

chokidar.watch("C:/Users/<User Music File>").on("all", (event, path) => {
  console.log(event, path);
});
