import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface E extends Source {
	payloadE: string;
	parent: string;
}

@Service()
export class EService extends DataSource<E> {
	serviceName = "E Service";
	constructor(repository: Repository) {
		super(repository.e());
	}
	async getByParentId(id: string): Promise<E> {
		const result = this.repository.find((item) => item.parent === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
}
