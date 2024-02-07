import Comment from '../models/comment';

export async function createComment(commentData: any): Promise<any> {
    try {
        const comment = await Comment.create({
            content: commentData.content,
            idReservation: commentData.idReservation
        });
        return comment;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
