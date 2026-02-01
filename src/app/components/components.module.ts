import { NgModule } from "@angular/core";
import { Button } from "./button/button";
import { Card } from "./card/card";

@NgModule({

    declarations: [
        Button,
        Card
    ],
    exports: [
        Button,
        Card
    ]

})

export class ComponentsModule {

}