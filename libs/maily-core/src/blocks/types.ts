import type { Editor, Range } from '@tiptap/core';

interface CommandProps {
  editor: Editor;
  range: Range;
}

type BlockItemCommand = {
  command: (options: CommandProps) => void;
  id?: never;
  commands?: never;
};

type BlockItemGroup = {
  id: string;
  command?: never;
  commands: BlockItem[];
}

export type BlockItem = {
  title: string;
  description?: string;
  searchTerms: string[];
  icon?: JSX.Element;
  render?: (editor: Editor) => JSX.Element | null | true;
  preview?: string | ((editor: Editor) => JSX.Element | null);
} & (BlockItemCommand | BlockItemGroup);

export type BlockGroupItem = {
  title: string;
  commands: BlockItem[];
};
