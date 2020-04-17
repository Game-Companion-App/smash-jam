import React from "react"
import axios from 'axios'
import AllFighters from '../components/AllFighters/AllFighters'
import {render, act} from '@testing-library/react'
import {withRouter} from 'react-router-dom'

// it('shows Mario when mounted', async () => {
//   let component

//   jest.spyOn(axios, 'get').mockImplementation(() => {
//     return Promise.resolve({data: [{fighter_number: 1, fighter_name: 'MARIO'}] })
//   })

//   await act(async () => {
//     const {container} = render(<withRouter(AllFighters) />)
//     component = container
//   })

//   expect(component.textContent).toContain('MARIO')
// })