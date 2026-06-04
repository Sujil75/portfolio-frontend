import React, {useState, useEffect, useRef} from 'react'

function useHomeRolesDisplay(roles) {const [role, setRole] = useState(roles[0])
  const [text, setText] = useState('')

  const timerOutRef = useRef(null)
  const isDeletingRef = useRef(false)
  const textIdxRef = useRef(0)
  const roleIdxRef = useRef(0)

  useEffect(() => {
      function listHandler() {
          if (!isDeletingRef.current) {
              if (textIdxRef.current < role.length) {
                  textIdxRef.current++

                  setText(role.slice(0, textIdxRef.current))

                  timerOutRef.current = setTimeout(listHandler, 300)
              } else {
                  isDeletingRef.current = true

                  timerOutRef.current = setTimeout(listHandler, 4000)
              }
          } else {
              if (textIdxRef.current > 0) {
                  textIdxRef.current--

                  setText(role.slice(0, textIdxRef.current))

                  timerOutRef.current = setTimeout(listHandler, 300)
              } else {
                  isDeletingRef.current = false

                  roleIdxRef.current = (roleIdxRef.current + 1) % roles.length
                  setRole(roles[roleIdxRef.current])

                  textIdxRef.current = 0
                  
                  timerOutRef.current = setTimeout(listHandler, 4000)
              }
          }
      }

      listHandler()

      return () => clearTimeout(timerOutRef.current)
  }, [roles, role])

  return text
}

export default useHomeRolesDisplay