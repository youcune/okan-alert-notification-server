# okan-alert-notification-server

WebSocket の接続が確立されているときに、指定パスに、

- ファイルが作成された場合 ALERT
- ファイルが削除された場合 OK

という文字列を送信するサーバーです。

## 環境構築

```bash
$ git clone https://github.com/youcune/okan-alert-notification-server.git
$ cd okan-alert-notification-server
$ npm install
$ node app.js /path/to/the/file/to/watch
```

