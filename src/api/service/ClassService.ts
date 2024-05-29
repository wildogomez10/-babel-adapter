import { BabelAdapter } from "../../classes";

export class ClassService {

    public babelAdapter: any

    constructor() {
        this.babelAdapter = new BabelAdapter()
        //await babelAdapter.loadClasses()
        this.babelAdapter.watchForChanges()
        this.babelAdapter.handleClientConnections()
    }

    async loadClasses() {
        await this.babelAdapter.loadClasses()
    }

}
