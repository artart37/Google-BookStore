import { GetAuthorsPipe } from './get-authors.pipe';

describe('GetAuthorsPipe', () => {
  it('create an instance', () => {
    const pipe = new GetAuthorsPipe();
    expect(pipe).toBeTruthy();
  });
});
