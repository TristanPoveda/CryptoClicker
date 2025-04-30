interface PanelProps {
  children: React.ReactNode;
  background?: string;
}

export default function Panel({ children, background = '#141414' }: PanelProps): React.ReactNode {
    return (
        <div
            style={{
                backgroundColor: background,
                padding: '0px',
                borderRadius: '8px',
                boxShadow: '2px 2px 4px rgb(0, 0, 0)',
            }}
        >
            {children}
        </div>
    );
}