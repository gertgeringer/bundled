import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Person } from "./person.interface";

@Component({
    selector: "person",
    template: `
        <p>Hello {{name}} {{surname}}</p>
    `,
})
export class PersonComponent implements OnInit {

    public name: string;
    public surname: string;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit(): void {
        this.http.get<Person>("api/person").subscribe(person => {
            this.name = person.name;
            this.surname = person.surname;
        })
    }
}