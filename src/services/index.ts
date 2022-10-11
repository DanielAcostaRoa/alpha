import 'reflect-metadata';
import { Container } from "typedi";
import { AService } from "./a.service";
import { BService } from "./b.service";
import { CService } from "./c.service";
import { DService } from "./d.service";
import { EService } from './e.service';
import {FService} from "./f.service"
import {GService} from "./g.service"

const ServiceData = {
    A: Container.get(AService),
    B: Container.get(BService),
    C: Container.get(CService),
    D: Container.get(DService),
    E: Container.get(EService),
    F: Container.get(FService),
    G: Container.get(GService)
};

export default ServiceData;
