## Motion decisions

The button uses short 180–220ms hover and press transitions so direct interactions feel responsive. State content enters over roughly 260ms with an ease-out curve, giving feedback quickly without feeling abrupt.

Animations primarily use transform and opacity to stay compositor-friendly. Success uses a subtle scale confirmation, while error uses a short one-time shake. The component also respects prefers-reduced-motion, removing non-essential motion while preserving state labels, icons, and colors.