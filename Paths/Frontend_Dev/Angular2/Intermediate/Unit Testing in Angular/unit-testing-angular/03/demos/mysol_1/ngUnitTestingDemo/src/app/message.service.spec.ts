import { MessageService } from "./Message.service";

describe('MessageService', () => {
	let service: MessageService;

	beforeEach(() => {
		service = new MessageService();
	});

	it('should have no messages to start', () => {
		expect(service.messages.length).toBe(0);
	});
})

