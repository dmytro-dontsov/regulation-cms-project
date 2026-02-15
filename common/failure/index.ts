class Failure extends Error {
  type = 'Failure';
  responseCode = 400;

  constructor(message: string) {
    super(message);
  }

  getResponse() {
    return {
      type: this.type,
      message: this.message,
    };
  }
}

export class NotFoundFailure extends Failure {
  type = 'NotFound';
  responseCode = 404;

  constructor(message: string) {
    super(message);
  }
}

export class ValidationFailure extends Failure {
  type = 'ValidationFailure';
  responseCode = 400;
  details: unknown;

  constructor(details: unknown) {
    super('Validation failed');
    this.details = details;
  }

  getResponse() {
    const baseResponse = super.getResponse();

    return {
      ...baseResponse,
      details: this.details,
    }
  }
}

export default Failure;