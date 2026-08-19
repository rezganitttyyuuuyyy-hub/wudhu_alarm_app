// AdMob integration placeholders.
// In production, replace these with actual react-native-google-mobile-ads calls.

export type AdResult = 'rewarded' | 'dismissed' | 'not_ready' | 'error';

export interface RewardedAdCallback {
  onReward?: () => void;
  onDismiss?: () => void;
  onError?: (msg: string) => void;
}

let adReady = true; // simulate readiness

export function isRewardedAdReady(): boolean {
  return adReady;
}

export async function loadRewardedAd(): Promise<void> {
  // Simulate loading delay
  await new Promise((r) => setTimeout(r, 600));
  adReady = true;
}

export async function showRewardedAd(cb: RewardedAdCallback): Promise<AdResult> {
  if (!adReady) {
    cb.onError?.('Ad not ready');
    return 'not_ready';
  }
  // Simulate ad playback (2s), then reward
  await new Promise((r) => setTimeout(r, 2000));
  cb.onReward?.();
  cb.onDismiss?.();
  return 'rewarded';
}

export function resetAd(): void {
  adReady = true;
}
