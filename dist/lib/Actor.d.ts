import Event from "./Event";
import LockDataType from "./types/LockDataType";
export declare class Actor {
    private data;
    private latestLockTime;
    private lockData;
    protected service: any;
    protected $: any;
    tags: Set<string>;
    constructor(data?: {});
    readonly type: string;
    readonly version: any;
    remove(args: any): void;
    readonly id: any;
    static getType(): string;
    readonly json: any;
    lock(data: LockDataType): boolean;
    unlock(key: any): void;
    protected when(event: Event): any;
    static toJSON(actor: Actor): any;
    static parse(json: any): Actor;
    static readonly version: string;
    static upgrade(data: any): Actor;
}
export interface ActorConstructor {
    new (any: any): Actor;
    getType(): string;
    version: string;
    createBefor?: (any, Domain) => Promise<any>;
    parse: (any) => Actor;
    upgrade: (any) => Actor;
}
