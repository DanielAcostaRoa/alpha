import 'reflect-metadata';

export interface Source {
	id: string;
}

export abstract class DataSource<T extends Source> {
	protected repository: T[];
	abstract serviceName: string;

	constructor(repository: T[]) {
		this.repository = repository;
	}
	async getAll(): Promise<T[]> {
		return this.repository;
	}
	async getById(id: string): Promise<T> {
		const result = this.repository.find((item) => item.id === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
	getByParentId(id: string): Promise<T> {
		throw new Error("Not implemented");
	}
}

