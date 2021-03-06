import { getRelativeHumanizedDate } from '../src/libs/date';
import { Helper } from './helper';

const helper = new Helper();

describe('Test hummanized date functionality', () => {

  it('should test in 1 day', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-15 14:00:00'),
      now
    );
    expect(humanizedDate).toBe('due in 1 day');
  });

  it('should test 1 day ago', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-13 14:00:00'),
      now
    );
    expect(humanizedDate).toBe('due 1 day ago');
  });

  it('should test in 3 days', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-17 13:00:00'),
      now
    );
    expect(humanizedDate).toBe('due in 3 days');
  });

  it('should test 2 day ago', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-12 15:00:00'),
      now
    );
    expect(humanizedDate).toBe('due 2 days ago');
  });

  it('should test in 13 hours', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-15 3:29:00'),
      now
    );
    expect(humanizedDate).toBe('due in 13 hours');
  });

  it('should test 1 hour ago', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-14 13:00:00'),
      now
    );
    expect(humanizedDate).toBe('due 1 hour ago');
  });

  it('should test in 10 minute', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-14 14:10:00'),
      now
    );
    expect(humanizedDate).toBe('due in 10 minutes');
  });

  it('should test 20 minutes ago', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-14 13:40:00'),
      now
    );
    expect(humanizedDate).toBe('due 20 minutes ago');
  });

  it('should test in 59 seconds', () => {
    const now = new Date('2019-09-14 14:00:00');
    const humanizedDate = getRelativeHumanizedDate(
      new Date('2019-09-14 14:00:59'),
      now
    );
    expect(humanizedDate).toBe('due in 59 seconds');
  });

  afterAll(done => {
    helper.resetConfig();
    done();
  });
});
