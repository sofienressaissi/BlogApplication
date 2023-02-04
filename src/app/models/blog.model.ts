export class Blog {

    private _id: string;
    private _blogTitle: string;
    private _blogAuthor: string;
    private _blogContent: string;
    private _numberUpvotes: number;
    private _numberDownvotes: number;
    private _borderState: string;

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get blogTitle(): string {
        return this._blogTitle;
    }
    public set blogTitle(value: string) {
        this._blogTitle = value;
    }

    public get blogAuthor(): string {
        return this._blogAuthor;
    }
    public set blogAuthor(value: string) {
        this._blogAuthor = value;
    }

    public get blogContent(): string {
        return this._blogContent;
    }
    public set blogContent(value: string) {
        this._blogContent = value;
    }

    public get numberUpvotes(): number {
        return this._numberUpvotes;
    }
    public set numberUpvotes(value: number) {
        this._numberUpvotes = value;
    }

    public get numberDownvotes(): number {
        return this._numberDownvotes;
    }
    public set numberDownvotes(value: number) {
        this._numberDownvotes = value;
    }

    public get borderState(): string {
        return this._borderState;
    }
    public set borderState(value: string) {
        this._borderState = value;
    }

}
