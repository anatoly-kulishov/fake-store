import { KeyCodeEnum } from '@/shared/types';

interface IKeyEventHandlerProps {
  keyCode: string;
  callback: () => void;
  events?: string[];
}

export function keyEventHandler<T extends IKeyEventHandlerProps>(
  keyCode: T['keyCode'],
  callback: T['callback'],
  events: T['events'] = [KeyCodeEnum.ENTER, KeyCodeEnum.SPACE],
): void {
  if (events.filter(e => e === keyCode).length) {
    callback();
  }
}
