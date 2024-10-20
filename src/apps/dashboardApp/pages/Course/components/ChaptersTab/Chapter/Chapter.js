import React, { useEffect } from "react";
import "./Chapter.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  extractMentorChapterYoutubePlaylist,
  updateMentorCourse,
} from "../../../../../../../store/slices/mentorSlice";
import Tabs from "../../../../../components/Tabs/Tabs";
import NoContent from "../../../../../../../components/NoContent/NoContent";
import FieldsetLayout from "../../../../../layouts/Fieldset/FieldsetLayout";
import { toast } from "react-toastify";
import BtnsAddDelete from "../../../../../components/BtnsAddDelete/BtnsAddDelete";
import { DevTool } from "@hookform/devtools";
import FormError from "../../../../../../../components/FormError/FormError";

const tabs = [
  { name: "details", to: ".", end: true },
  { name: "lessons" },
  // { name: "resources" },
];

export default function Chapter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { chapterId } = useParams();
  const {
    apiData: { result },
    currentDummyChapters,
  } = useSelector((state) => state.mentor.currentCourse);
  const chapters = [...(result?.modules || []), ...currentDummyChapters];

  const methods = useForm({
    defaultValues: async () => {
      // the async version will after the comp finished rendered - with useEffect (from it);
      // we don't need to perom check here as if the check failed on the render then it will not computed;
      const currentChapter = { ...chapters[chapterId - 1] };
      return currentChapter;
    },
  });

  useEffect(
    function () {
      methods.reset(); // to trigger the async defaultValues function
    },
    [methods]
  );

  if (!chapters.length || chapterId > chapters.length || chapterId < 1)
    return <NoContent />;

  const { chapter, createdAt, title } = chapters[chapterId - 1];

  const saveHandler = (chapterData) => {
    const course = { description: null, ...result };
    const chapterIndex = chapterId - 1;
    let isNew;
    if (chapterIndex < course.modules.length) {
      course.modules = [...course.modules].map((c, i) =>
        i === chapterIndex ? chapterData : c
      );
    } else {
      course.modules = [...course.modules, chapterData];
      isNew = true;
    }
    dispatch(updateMentorCourse({ newCourse: course })).then(
      ({ payload, error }) => {
        if (!error) {
          if (isNew) {
            navigate(`../${result?.modules.length + 1}`);
          } else {
            navigate(`../${chapterId}`);
          }
        }
      }
    );
  };

  const deleteHandler = () => {
    const course = { ...result };
    const chapterIndex = chapterId - 1;

    course.modules = course.modules.filter(
      (_, index) => index !== chapterIndex
    );

    dispatch(updateMentorCourse({ newCourse: course })).then(
      ({ payload, error }) => {
        if (!error) {
          toast.warning("Chapter has been deleted!");
          navigate("../");
        }
      }
    );
  };

  async function extractPlaylistHandler() {
    dispatch(
      extractMentorChapterYoutubePlaylist({
        url: methods.getValues().extractor,
        from: methods.getValues().from,
        to: methods.getValues().to,
      })
    ).then(({ payload }) => {
      if (payload.status === "success") {
        methods.reset({
          lessons: [...payload.result.videos].map((vObj) => ({
            ...vObj,
            srcVideo: vObj.url,
          })),
        });

        const { title, description, videos, thumbnails } = payload.result;
        const getThumbnail = (thumbnails) =>
          (thumbnails?.length > 0 && thumbnails[0]?.url) || null;

        methods.reset({
          thumbnail: getThumbnail(thumbnails),
          title: title || "UnTitled chapter...",
          description:
            description || "There is no description for this chapter yet...",
          lessons:
            [...(videos || [])].map(({ title, url, thumbnails }) => ({
              title,
              srcVideo: url,
              thumbnail: getThumbnail(thumbnails),
            })) || [],
        });
      }
    });
  }

  return (
    <>
      <FormProvider {...methods}>
        <div className="container-fluid chapters-tab-chapter m-3 ms-0">
          <header className="my-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <h3>
                Chapter {chapter} - {title}
              </h3>
              <time>{createdAt}</time>
            </div>
            <div>
              <BtnsAddDelete
                onSave={methods.handleSubmit(saveHandler)}
                onDelete={methods.handleSubmit(deleteHandler)}
              />
            </div>
          </header>
          <Tabs tabs={tabs} />
          <div className="chapters-tab-body">
            {methods.formState.errors && (
              <FormError errors={methods.formState.errors} />
            )}
            <FieldsetLayout
              title={"Extract details/lesssns from a YouTube PlayList"}
              sides={2}
            >
              <input
                {...methods.register("extractor")}
                type="text"
                className="form-control"
                placeholder="Youtube playlist source"
              />
              <div className="w-100">
                <input
                  {...methods.register("from")}
                  type="number"
                  className="form-control mb-1 py-1"
                  style={{ fontSize: "14px" }}
                  placeholder="From (1)"
                />
                <input
                  {...methods.register("to")}
                  type="number"
                  className="form-control py-1"
                  style={{ fontSize: "14px" }}
                  placeholder="To ()"
                />
              </div>
              <button
                className="btn btn-primary px-lg-5 flex-1"
                onClick={methods.handleSubmit(extractPlaylistHandler)}
              >
                Extract
              </button>
            </FieldsetLayout>
            <div className="border-bottom my-4 border-dark-subtitle"></div>
            <Outlet />
          </div>
        </div>
      </FormProvider>
      <div className="form-divtool-wrapper">
        {/* <DevTool control={methods.control} /> */}
      </div>
    </>
  );
}
