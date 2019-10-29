import Item from './draggable-item'

export default props => {

  return (
    <>
      <div className="drop-zone-container d-flex flex-column justify-content-between">
        <div className="drop-zone">
          <div className="grid-row">
            <div className="grid-column"></div>
            <div className="grid-column"></div>
            <div className="grid-column"></div>
          </div>
          <div className="grid-row">
            <div className="grid-column"></div>
            <div className="grid-column"></div>
            <div className="grid-column"></div>
          </div>
          <div className="grid-row">
            <div className="grid-column"></div>
            <div className="grid-column"></div>
            <div className="grid-column"></div>
          </div>
        </div>
        <div className="river"></div>
        <div className="pick-zone">
          <Item />

        </div>
      </div>
      <style jsx>{`
        .drop-zone-container {
          width: 100%;
          height: 100%;
        }
        .drop-zone {
          height: 100%;
          border: dashed 2px pink;
          margin: 35px;
          display: flex;
          flex-direction: column;
        }
        .river {
          height: 200px;
          background-color: var(--main-blue);
          width: 100%;
        }
        .pick-zone {
          margin: 35px;
          height: 100%;
          border: dashed 2px pink;
        }
        .grid-row {
          display: flex;
          flex-direction: row;
          height: 100%;
          width: 100%;
          justify-content: space-around;
          border-bottom: dashed 2px pink;
        }
        .grid-row:last-child {
          border-bottom: none;
        }
        .grid-column {
          border-right: dashed 2px pink;
          height: 100%;
          width: 100%;
        }
        .grid-column:last-child {
          border-right: none;
        }
      `}</style>
    </>
  )
}