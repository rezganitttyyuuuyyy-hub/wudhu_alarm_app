import { View, Text, StyleSheet } from 'react-native';
import { useApp } from '@/lib/AppContext';

interface Props {
  variant?: 'banner' | 'rewarded';
  label?: string;
}

export default function AdBanner({ variant = 'banner', label }: Props) {
  const { palette, t } = useApp();
  const text = label ?? (variant === 'rewarded' ? t('rewardedAdPlaceholder') : t('adPlaceholder'));

  return (
    <View style={[styles.wrap, { backgroundColor: palette.surfaceAlt, borderColor: palette.border }]}>
      <View style={[styles.tag, { backgroundColor: palette.textMuted + '22' }]}>
        <Text style={[styles.tagText, { color: palette.textMuted }]}>Ad</Text>
      </View>
      <Text style={[styles.text, { color: palette.textMuted }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: { position: 'absolute', top: 6, left: 8, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  tagText: { fontSize: 9, fontWeight: '700', textTransform: 'uppercase' },
  text: { fontSize: 13, fontWeight: '500' },
});
