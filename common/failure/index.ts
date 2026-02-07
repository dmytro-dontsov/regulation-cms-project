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

export default Failure;