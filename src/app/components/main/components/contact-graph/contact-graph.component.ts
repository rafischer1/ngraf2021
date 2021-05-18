import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { pieGraphSkillsData } from "./dashboard-data";
import { Observable } from "rxjs";

@Component({
  selector: "raf-contact-graph",
  templateUrl: "./contact-graph.component.html",
  styleUrls: ["./contact-graph.component.scss"],
})
export class ContactGraphComponent implements OnInit {
  @Input() contactGraphLocked$: Observable<boolean>;
  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() lock: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  pieGraphData: { name: string; value: number }[] = pieGraphSkillsData;
  ngOnInit(): void {}
}
