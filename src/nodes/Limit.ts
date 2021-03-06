import AbstractNode from "./AbstractNode";

export default class Limit extends AbstractNode {
    readonly name = 'limit';
    public limit: number;
    public offset: number;

    constructor(limit: number, offset: number = 0) {
        super();
        this.limit = limit;
        this.offset = offset;
    }
}
