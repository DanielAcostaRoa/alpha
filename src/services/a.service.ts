import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface A extends Source {
	payloadA: string;
}

@Service()
export class AService extends DataSource<A> {
	serviceName = "A Service";
	constructor(repository: Repository) {
		super(repository.a());
	}
}
