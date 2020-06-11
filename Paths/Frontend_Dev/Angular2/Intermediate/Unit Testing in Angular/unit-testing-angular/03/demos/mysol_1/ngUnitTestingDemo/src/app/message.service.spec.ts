import { MessageService } from "./Message.service";

describe('MessageService', () => {
	let service: MessageService;

	beforeEach(() => {
		service = new MessageService();
	});

	it('should have no messages to start', () => {
		expect(service.messages.length).toBe(0);
	});

	it('should add a messages when add is called', () => {
		service.add('message1');
		expect(service.messages.length).toBe(1);
	});
})

