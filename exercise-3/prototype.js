String.prototype.ucfirst = function () {
    if (typeof this.valueOf() !== "string" || this.valueOf() === "") return "";
    return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1);
}