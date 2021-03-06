import EventType from "./EventType";
import { Actor, ActorConstructor } from "./Actor";
import Repository from "./Repository";
import EventStore from "./EventStore";
import Domain from "./Domain";
export default class EventBus {
    private eventstore;
    private domain;
    private repositorieMap;
    private ActorClassMap;
    private emitter;
    private lockSet;
    private subscribeRepo;
    constructor(eventstore: EventStore, domain: Domain, repositorieMap: Map<ActorConstructor, Repository>, ActorClassMap: Map<string, ActorConstructor>);
    once(event: EventType, cb?: Function): Promise<Event>;
    subscribe(event: EventType, {actorType, actorId, method}: {
        actorType: string;
        actorId: string;
        method: string;
    }, timeout?: number): void;
    unsubscribe(): void;
    on(event: EventType, cb: Function): void;
    publish(actor: Actor): Promise<void>;
    rollback(sagaId: any): Promise<void>;
}
