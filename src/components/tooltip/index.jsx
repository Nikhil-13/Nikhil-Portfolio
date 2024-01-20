import './style.css';

function ToolTip() {
  return (
    <div className='item-hints'>
      <div className='hint' data-position='4'>
        <span className='hint-radius'></span>
        <span className='hint-dot'>N</span>
        <div className='hint-content do--split-children'>
          <p className='tooltip-message'>Use this as Home Button.</p>
        </div>
      </div>
    </div>
  );
}

export default ToolTip;
