import { Button } from './Button'

const OpenClosed = () => {
  return (
    <div>
      <h1>OpenClosed</h1>
      <div className="flex space-x-10">
        <Button
          text="Go Home"
          // role="forward"
          icon={<i className="forward-icon" />}
        />
        <Button
          text="Go Back"
          // role="back"
          icon={<i className="backward-icon" />}
        />
      </div>
    </div>
  )
}

export default OpenClosed
