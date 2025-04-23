import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon
}: ButtonProps) {
  
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? Colors.white : Colors.primary[500]} 
          size="small" 
        />
      ) : (
        <>
          {icon && icon}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Layout.radius.medium,
    gap: Layout.spacing.s,
  },
  primary: {
    backgroundColor: Colors.primary[500],
    borderWidth: 0,
  },
  secondary: {
    backgroundColor: Colors.accent[500],
    borderWidth: 0,
  },
  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  ghost: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
  },
  small: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.m,
  },
  medium: {
    paddingVertical: Layout.spacing.s,
    paddingHorizontal: Layout.spacing.l,
  },
  large: {
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.xl,
  },
  disabled: {
    backgroundColor: Colors.neutral[200],
    borderColor: Colors.neutral[300],
    opacity: 0.7,
  },
  text: {
    fontFamily: 'Inter_500Medium',
  },
  primaryText: {
    color: Colors.white,
  },
  secondaryText: {
    color: Colors.white,
  },
  outlineText: {
    color: Colors.primary[500],
  },
  ghostText: {
    color: Colors.primary[500],
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
  disabledText: {
    color: Colors.neutral[500],
  },
});