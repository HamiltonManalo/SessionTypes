export var WorkerConfiguration;
(function (WorkerConfiguration) {
    const callbacks = {};
    function HandleSendImage(cb) {
        callbacks["SendImage"] = cb;
        return {
            Build: () => callbacks
        };
    }
    WorkerConfiguration.HandleSendImage = HandleSendImage;
})(WorkerConfiguration || (WorkerConfiguration = {}));
