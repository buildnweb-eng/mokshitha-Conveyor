# Client Logos

## How to Add Client Logos

Place your client logo images in this folder with the following naming convention:

### File Names:
- `dr-reddys.png` or `dr-reddys.jpg`
- `britannia.png` or `britannia.jpg`
- `patanjali.png` or `patanjali.jpg`
- `heritage.png` or `heritage.jpg`
- `nuziveedu.png` or `nuziveedu.jpg`
- `parle.png` or `parle.jpg`
- `bharat-biotech.png` or `bharat-biotech.jpg`
- `nutrine.png` or `nutrine.jpg`
- `vimta-labs.png` or `vimta-labs.jpg`
- `jodas.png` or `jodas.jpg`
- `akshara-pharma.png` or `akshara-pharma.jpg`
- `karvy-labs.png` or `karvy-labs.jpg`

### Logo Specifications:
- **Format**: PNG (transparent background preferred) or JPG
- **Size**: 200-400px width (height auto)
- **Quality**: High resolution for clear display
- **Background**: White or transparent
- **Aspect Ratio**: Logos should be approximately square or rectangular

### After Adding Logos:
Once you place the logo images here, update the code in `src/app/page.tsx` to use:

```tsx
<Image 
  src="/clients/britannia.png" 
  alt="Britannia Industries" 
  width={200} 
  height={100}
  className="object-contain"
/>
```

Instead of the current text placeholders.

