export async function waitForTask(msg: string, timeout: number): Promise<void> {
	console.log(msg+" is called");
	await new Promise((resolve) => setTimeout(resolve, timeout));
	console.log(msg+" is done");
	return;
}