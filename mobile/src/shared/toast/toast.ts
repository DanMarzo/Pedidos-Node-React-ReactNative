import { ToastAndroid } from 'react-native';

class Toast {
  static exibirToast(text: string) {
    ToastAndroid.showWithGravity(text, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  }
}

export { Toast };
