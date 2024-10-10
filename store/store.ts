// imports
import Axios from "axios"
import { create } from "zustand"

import steps_list from "@/types/step"
import { stepsType } from "@/types/type"

// Zustand Store
interface StepsState extends stepsType {
  nextStep: () => void
  previousStep: () => void
  changeStep: (step_number: number) => void
  loadComponent: (id: string, component: any) => void
  updateAnswer: (id: string, data: object) => void
  blockNext: () => void
  allowNext: () => void
  getAnswer: (id: string) => object
  getAllAnswers: () => Promise<{}>
  generateOverview: () => Promise<void>
  generateMockData: () => {}
}

export const useStepsStore = create<StepsState>((set, get) => ({
  ...{
    step_num: 0,
    animation: "animate__fadeInRight",
    is_generate_btn: false,
    is_next_btn: true,
    is_previous_btn: false,
    steps_list,
    is_blocked: true,
  },

  nextStep: () =>
    set((state) => {
      const nextStepNum = state.step_num + 1
      return {
        step_num: nextStepNum,
        is_previous_btn: true,
        animation: "animate__fadeInRight",
        is_next_btn: nextStepNum === steps_list.length - 1 ? false : true,
        is_generate_btn: nextStepNum === steps_list.length - 1,
      }
    }),

  previousStep: () =>
    set((state) => {
      const prevStepNum = state.step_num - 1
      return {
        step_num: prevStepNum,
        animation: "animate__fadeInLeft",
        is_previous_btn: prevStepNum > 0,
        is_next_btn: true,
        is_generate_btn: false,
      }
    }),

  changeStep: (step_number: number) =>
    set(() => ({
      step_num: step_number,
      is_previous_btn: step_number > 0,
      is_next_btn: step_number + 1 !== steps_list.length,
      is_generate_btn: step_number + 1 === steps_list.length,
    })),

  loadComponent: (id: string, component: any) =>
    set((state) => ({
      steps_list: state.steps_list.map((elt) =>
        elt.id === id ? { ...elt, component } : elt
      ),
    })),

  updateAnswer: (id: string, data: object) =>
    set((state) => ({
      steps_list: state.steps_list.map((elt) =>
        elt.id === id ? { ...elt, answers: data } : elt
      ),
    })),

  blockNext: () =>
    set(() => ({
      is_blocked: true,
    })),

  allowNext: () =>
    set(() => ({
      is_blocked: false,
    })),

  // get the current answer for a specific step
  getAnswer: (id: string) => {
    const search = get().steps_list.filter((elt) => elt.id === id)
    return search[0].answers
  },

  getAllAnswers: async () => {
    try {
      const steps = get().steps_list
      let combinedAnswers = {}

      steps.forEach((elt) => {
        combinedAnswers = { ...combinedAnswers, ...elt.answers }
      })

      console.log("Combined Answers:", combinedAnswers)
      return combinedAnswers // Return the combined answers
    } catch (err) {
      console.error("Error generating answers:", err)
      throw err
    }
  },

  generateOverview: async () => {
    const data = {
      ...get().steps_list[0].answers,
      ...get().steps_list[1].answers,
      ...get().steps_list[2].answers,
    }
    console.log(data)

    await Axios.post("/api/generate/overview", data)
  },

  generateMockData: () => {
    const data = {
      ...get().steps_list[0].answers,
      ...get().steps_list[1].answers,
      ...get().steps_list[2].answers,
    }
    return data
  },
}))
