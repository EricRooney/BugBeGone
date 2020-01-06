import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findOne({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    if (update.closed === false) {
      let data = await _repository.findOneAndUpdate({ _id: id }, update, {
        new: true
      });
      if (!data) {
        throw new ApiError("Invalid Id", 400);
      }
      return data;
    } else {
      //throw new ApiError("Bug is Closed", 400);
      return update;
    }
  }
  async delete(id) {
    let update = await _repository.findOne({ _id: id });
    update.closed = true;
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
}

const bugService = new BugService();
export default bugService;
