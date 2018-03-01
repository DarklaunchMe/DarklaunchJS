declare namespace Darklaunch {
    function fetchFlags(): void
    function init(uuid?: string): void
    function isEnabled(flag: string): boolean
    function log(message: string): void
}

export = Darklaunch;