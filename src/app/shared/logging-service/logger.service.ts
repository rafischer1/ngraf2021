import { Injectable } from "@angular/core";
import { LoggerStore } from "./logger.store";
import { Log } from "./log.interface";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor(private store: LoggerStore) {}

  toggleStore = () =>
    this.store.update((_old) => {
      return { active: !_old.active, logs: [] };
    });

  addLog = (log: Log) => {
    setTimeout(() => {
      const clg = `(${log.context.toUpperCase()}): ${log.text}`;
      console.log("%c " + clg, "color: limegreen; font-family: monospace;");
      this.store.update((_old) => {
        return { logs: [log, ..._old.logs] };
      });
    }, 500);
  };

  clearLogs = () =>
    this.store.update((_) => {
      return { logs: [] };
    });
}
