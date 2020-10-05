import { act, renderHook } from '@testing-library/react-hooks';
import { ToastProvider, useToast } from '../../hooks/toast';

describe('Toast hook', () => {
  it('should be able to add new toast', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() => {
      result.current.addToast({
        type: 'success',
        title: 'Testing',
        description: 'Testing a new Toast.',
      });
    });

    expect(result.current.messages[0].title).toEqual('Testing');
  });

  it('should be able to remove a toast', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() => {
      result.current.addToast({
        type: 'success',
        title: 'Testing',
        description: 'Testing a new Toast.',
      });
    });

    act(() => {
      result.current.removeToast(result.current.messages[0].id);
    });

    expect(result.current.messages.length).toEqual(0);
  });
});
