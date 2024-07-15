import React from 'react';
import Palette from './Palette'
import { createRandomPalette } from '../lib/createRandomPalette';
import { PaletteConfig } from '../types';

interface PaletteInputProps {
  onChange: (updatedPalette: PaletteConfig) => void
  value: PaletteConfig
}

export default function PaletteInput({ onChange, value }: PaletteInputProps) {
  return <Palette currentMode="hex" palette={createRandomPalette()} updateGlobal={onChange} />
}