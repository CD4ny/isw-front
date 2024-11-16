interface FabProps {
  children: React.ReactNode;
}

const Fab: React.FC<FabProps> = ({ children }) => {
  return <div className="fixed top-4 right-4 z-50">{children}</div>;
};

export default Fab;
