import { Controller } from "@hotwired/stimulus"
import md5 from "md5"

export default class extends Controller {
  static values = { linkName: String }

  convert(event) {
    event.preventDefault()

    if (event.target.textContent == this.linkNameValue) {
      event.target.textContent = md5(event.target.textContent)
    } else {
      event.target.textContent = this.linkNameValue
    }
  }
}
