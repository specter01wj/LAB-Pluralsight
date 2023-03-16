"use strict";
exports.__esModule = true;
var message_service_1 = require("./message.service");
fdescribe('message service', function () {
    var service;
    it('should have no messages to start', function () {
        service = new message_service_1.MessageService();
        expect(service.messages.length).toBe(0);
    });
    it('should add a message when add is called', function () {
        service = new message_service_1.MessageService();
        service.add('message1');
        expect(service.messages.length).toBe(1);
    });
    it('should remove all messages when clear is called', function () {
        service = new message_service_1.MessageService();
        service.add('message1');
        service.clear();
        expect(service.messages.length).toBe(0);
    });
});
